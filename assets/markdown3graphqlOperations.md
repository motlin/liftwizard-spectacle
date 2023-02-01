## GraphQL operations

* Queries like `blueprint(key: "-KnQ865j-qQ21WoUPbd3")` aren't powerful enough
* Semantics can go into parameter names
* `blueprint(titleStartsWith: "Tileable", titleEndsWith: "Game")`

```
{
  blueprintByFinder(
    operation: {
      tags: { notExists: { tagName: { eq: "space-exploration" } } }
      title: { lower: { contains: "space exploration" } }
    }
  ) {
    key
    title
    tags {
      tagName
      tagCategory
    }
  }
}
```
