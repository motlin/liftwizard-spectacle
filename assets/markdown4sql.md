# SQL examples

* asOf infinity
  * Blueprint
  * BlueprintTag
  * Tag
* asOf {date}
  * Blueprint
  * BlueprintVersion
---

# Blueprint asOf infinity

```sql
SELECT
    *
FROM
    BLUEPRINT
WHERE
      BLUEPRINT.key = '-KnQ865j-qQ21WoUPbd3'
  AND BLUEPRINT.system_to = '9999-12-01 23:59:00.000';
```

| key                  | title        | imgur_id | system_from         | system_to           |
| -------------------- | ------------ | -------- | ------------------- | ------------------- |
| -KnQ865j-qQ21WoUPbd3 | Tileable ... | ta1WUcf  | 2020-08-04 04:20:24 | 9999-12-01 23:59:00 |
---

# BlueprintTag asOf infinity

```sql
SELECT
    *
FROM
    BLUEPRINT_TAG
WHERE
      BLUEPRINT_TAG.blueprint_key = '-KnQ865j-qQ21WoUPbd3'
  AND BLUEPRINT_TAG.system_to = '9999-12-01 23:59:00.000';
```

| blueprint_key        | tag_category | tag_name   | system_from         | system_to           |
| -------------------- | ------------ | ---------- | ------------------- | ------------------- |
| -KnQ865j-qQ21WoUPbd3 | general      | early game | 2017-06-25 04:20:11 | 9999-12-01 23:59:00 |
| -KnQ865j-qQ21WoUPbd3 | general      | mid game   | 2017-07-20 04:20:10 | 9999-12-01 23:59:00 |
| -KnQ865j-qQ21WoUPbd3 | general      | tileable   | 2017-06-25 04:20:11 | 9999-12-01 23:59:00 |
| -KnQ865j-qQ21WoUPbd3 | mods         | vanilla    | 2017-06-25 04:20:11 | 9999-12-01 23:59:00 |
| -KnQ865j-qQ21WoUPbd3 | production   | science    | 2017-06-25 04:20:11 | 9999-12-01 23:59:00 |
| -KnQ865j-qQ21WoUPbd3 | version      | 0,17       | 2019-10-02 08:25:22 | 9999-12-01 23:59:00 |
---

# Tag asOf infinity

```sql
SELECT
    TAG.*
FROM
    TAG
        INNER JOIN (SELECT DISTINCT
                        BLUEPRINT_TAG.tag_category,
                        BLUEPRINT_TAG.tag_name
                    FROM
                        BLUEPRINT_TAG
                            INNER JOIN BLUEPRINT ON BLUEPRINT_TAG.blueprint_key = BLUEPRINT.key
                    WHERE
                          BLUEPRINT_TAG.system_to = '9999-12-01 23:59:00.000'
                      AND BLUEPRINT.system_to = '9999-12-01 23:59:00.000'
                      AND BLUEPRINT.key = '-KnQ865j-qQ21WoUPbd3') AS J1
                   ON TAG.category = J1.tag_category AND TAG.name = J1.tag_name
WHERE
    TAG.system_to = '9999-12-01 23:59:00.000';
```

| category   | name       | ordinal | system_from         | system_to           |
| ---------- | ---------- | -------:| ------------------- | ------------------- |
| general    | early game | 9       | 2017-04-24 13:44:03 | 9999-12-01 23:59:00 |
| general    | mid game   | 10      | 2017-04-24 13:44:03 | 9999-12-01 23:59:00 |
| general    | tileable   | 13      | 2017-04-24 13:44:03 | 9999-12-01 23:59:00 |
| mods       | vanilla    | 29      | 2017-04-24 13:44:03 | 9999-12-01 23:59:00 |
| production | science    | 49      | 2020-06-07 04:20:20 | 9999-12-01 23:59:00 |
| version    | 0,17       | 78      | 2020-06-07 04:20:20 | 9999-12-01 23:59:00 |

---

# Blueprint asOf {date}

```sql
SELECT
    BLUEPRINT.*
FROM
    BLUEPRINT
WHERE
      BLUEPRINT.key = '-KnQ865j-qQ21WoUPbd3'
  AND BLUEPRINT.system_from <= '2020-01-11 00:00:00.000'
  AND BLUEPRINT.system_to > '2020-01-11 00:00:00.000';
```

| key                  | title        | imgur_id | system_from         | system_to           |
| -------------------- | ------------ | -------- | ------------------- | ------------------- |
| -KnQ865j-qQ21WoUPbd3 | Tileable ... | 1GpbUKi  | 2020-01-10 04:26:22 | 2020-01-11 04:20:28 |
---

# BlueprintVersion asOf {date}

```sql
SELECT
    BLUEPRINT_VERSION.*
FROM
    BLUEPRINT_VERSION
WHERE
      BLUEPRINT_VERSION.key = '-KnQ865j-qQ21WoUPbd3'
  AND BLUEPRINT_VERSION.system_from <= '2020-01-11 00:00:00.000'
  AND BLUEPRINT_VERSION.system_to > '2020-01-11 00:00:00.000';
```

| key                  | number | system_from         | system_to           |
| -------------------- | ------ | ------------------- | ------------------- |
| -KnQ865j-qQ21WoUPbd3 | 44     | 2020-01-10 04:26:22 | 2020-01-11 04:20:28 |
