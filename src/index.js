import React from 'react';
import ReactDOM from 'react-dom';
import {
  Appear,
  Box,
  CodePane,
  CodeSpan,
  Deck,
  FlexBox,
  FullScreen,
  Grid,
  Heading,
  Image,
  ListItem,
  Markdown,
  Notes,
  OrderedList,
  Progress,
  Slide,
  SpectacleLogo,
  Stepper,
  Text,
  UnorderedList,
    Link,
  indentNormalizer
} from 'spectacle';

import json1ById from '../assets/json1ById.txt';
import json2AsOf from '../assets/json2AsOf.txt';
import json3Version from '../assets/json3Version.txt';
import graphql4ByKey from '../assets/graphql4ByKey.txt';
import json5ByKey from '../assets/json5ByKey.txt';
import graphql6WithFragment from '../assets/graphql6WithFragment.txt';
import graphql7WithStructure from '../assets/graphql7WithStructure.txt';
import graphql8LimitedStructure from '../assets/graphql8LimitedStructure.txt';
import markdown1goals from '../assets/markdown1goals.md';
import markdown2quiz from '../assets/markdown2quiz.md';
import markdown3graphqlOperations from '../assets/markdown3graphqlOperations.md';
import markdown4sql from '../assets/markdown4sql.md';

// SPECTACLE_CLI_THEME_START
const theme = {
    fonts: {
        header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
        text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    },
    size: {
        maxCodePaneHeight: 300
    }
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress type="bar" />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const formidableLogo =
  'https://avatars2.githubusercontent.com/u/5078602?s=280&v=4';

const deck = <Deck theme={theme} transitionEffect="fade">
    <Slide>
        <Heading fontSize="150px">⏳ Temporal ⏳ Services Demo</Heading>
    </Slide>
    <Markdown containsSlides>
        {markdown1goals}
    </Markdown>
    <Slide>
        <Heading>Endpoints to Demo</Heading>
        <Grid gridTemplateColumns="1fr 5fr" gridColumnGap={15}>
            <Box backgroundColor="primary">
                <Text color="secondary">By key</Text>
                <Text color="secondary">By date</Text>
                <Text color="secondary">By version</Text>
            </Box>
            <Box backgroundColor="secondary">
                <Appear elementNum={0}>
                    <Text>
                        <Link href="https://www.factorio.school/api/blueprint/-KnQ865j-qQ21WoUPbd3">
                            <CodeSpan>{"/.../{key}"}</CodeSpan>
                        </Link>
                    </Text>
                </Appear>
                <Appear elementNum={1}>
                    <Text>
                        <Link
                            href="https://www.factorio.school/api/blueprint/-KnQ865j-qQ21WoUPbd3?asOf=2020-08-04T00:00:00Z">
                            <CodeSpan>{"/.../{key}?asOf=2020-08-04T00:00:00Z"}</CodeSpan>
                        </Link>
                    </Text>
                </Appear>
                <Appear elementNum={2}>
                    <Text>
                        <Link href="https://www.factorio.school/api/blueprint/-KnQ865j-qQ21WoUPbd3?version=44">
                            <CodeSpan>{"/.../{key}?version=44"}</CodeSpan>
                        </Link>
                    </Text>
                </Appear>
            </Box>
        </Grid>
    </Slide>
    <Slide>
        <Heading>{"/{key}"}</Heading>
        <Stepper
            defaultValue={[]}
            values={[
                [1, 69, <Markdown>{"* `GET blueprint/{key}` is the same as:\n* `GET blueprint/{key}?asOf=9999-12-01T00:00:00Z`"}</Markdown>],
                [6, 7, <Markdown>`systemFrom` is the last updated date</Markdown>],
                [6, 7, <Markdown>`systemTo: null` means the current data</Markdown>],
                [6, 7, <Markdown>`9999-12-01`, `null`, `infinity` all mean the same thing</Markdown>],
                [8, 8, <Markdown>`createdOn` matches version 1's `systemFrom` and never changes</Markdown>],
                [11, 11, <Markdown>`numberOfUpvotes` is derived from `count()`</Markdown>],
                [13, 16, <Markdown>`author` comes from `Person` table</Markdown>],
                [13, 16, <Markdown>`author` json omits `systemFrom` and `systemTo`</Markdown>],
                [13, 16, <Markdown>`author` is **not** part of the composite</Markdown>],
                [24, 61, <Markdown>{"`Blueprint <--> Tag` is many-to-many"}</Markdown>],
                [24, 61, <Markdown>`BlueprintTag` mapping table is part of the Blueprint composite</Markdown>],
                [3, 5, <Markdown>`version.number` increments with changes to the composite</Markdown>],
                [3, 5, <Markdown>`version` comes from `BlueprintVersion` temporal table and has its own `systemFrom` and `systemTo`. Do you know why?</Markdown>],
                [6, 6, <Markdown>this: `2020-08-04T04:20:24Z` next: `2020-08-04T00:00:00Z`</Markdown>],
            ]}
        >
            {(value, step) => (
                <Box>
                    <CodePane
                        fontSize={16}
                        language="json"
                        highlightStart={value[0]}
                        highlightEnd={value[1]}
                        indentSize={4}
                    >
                        {json1ById}
                    </CodePane>
                    {value[2]}
                </Box>
            )}
        </Stepper>
    </Slide>
    <Slide>
        <Heading>{"{key}?asOf=2020-08-04T00:00:00Z"}</Heading>
        <Stepper
            defaultValue={[]}
            values={[
                [6, 7, <Markdown>{"`systemFrom <= 2020-08-04 < systemTo`"}</Markdown>],
                [3, 5, <Markdown>`version.number == 45`</Markdown>],
                [10, 10, <Markdown>Old title here - new one said `0.17-0.18`</Markdown>],
            ]}
        >
            {(value, step) => (
                <Box>
                    <CodePane
                        fontSize={16}
                        language="json"
                        highlightStart={value[0]}
                        highlightEnd={value[1]}
                        indentSize={4}
                    >
                        {json2AsOf}
                    </CodePane>

                    {value[2]}
                </Box>
            )}
        </Stepper>
    </Slide>
    <Slide>
        <Heading>{"{key}?version=44"}</Heading>
        <Stepper
            defaultValue={[]}
            values={[
                [3, 5, <Markdown>`version.number == 44`</Markdown>],
                [6, 7, <Markdown>{"`systemFrom == 2020-01-10T04:26:22Z`"}</Markdown>],
                [17, 23, <Markdown>{"Old imgur image here - new one is `ta1WUcf`"}</Markdown>],
            ]}
        >
            {(value, step) => (
                <Box>
                    <CodePane
                        fontSize={16}
                        language="json"
                        highlightStart={value[0]}
                        highlightEnd={value[1]}
                        indentSize={4}
                    >
                        {json3Version}
                    </CodePane>

                    {value[2]}
                </Box>
            )}
        </Stepper>
    </Slide>
    <Markdown containsSlides>
        {markdown2quiz}
    </Markdown>
    <Slide>
        <Heading>{"Query: blueprint(key: \"{key}\")"}</Heading>
        <Stepper
            defaultValue={[]}
            values={[
                [1, 40, <Markdown>{"Similar query to `GET blueprint/{key}`"}</Markdown>],
                [4, 8, <Markdown>{"except we're also including `systemFrom` and `systemTo` here"}</Markdown>],
                [16, 21, <Markdown>{"and here, etc."}</Markdown>],
                [2, 2, <Markdown>{"GraphQL has no notion of criteria. Exact equality for `key` is implied."}</Markdown>],
            ]}
        >
            {(value, step) => (
                <Box>
                    <CodePane
                        fontSize={16}
                        language="graphql"
                        highlightStart={value[0]}
                        highlightEnd={value[1]}
                        indentSize={4}
                    >
                        {graphql4ByKey}
                    </CodePane>

                    {value[2]}
                </Box>
            )}
        </Stepper>
    </Slide>
    <Slide>
        <Heading>{"Result: blueprint(key: \"{key}\")"}</Heading>
        <Stepper
            defaultValue={[]}
            values={[
                [1, 90, <Markdown>{"Similar results to `GET blueprint/{key}`"}</Markdown>],
                [2, 2, <Markdown>{"Except GraphQL wraps the result in `data` envelope"}</Markdown>],
                [5, 11, <Markdown>{"`systemFrom` matches between `Blueprint` and `BlueprintVersion`. Remember why?"}</Markdown>],
                [12, 22, <Markdown>{"`author.displayName` hasn't changed in years"}</Markdown>],
                [23, 31, <Markdown>{"`imgurImage` wasn't changed in version 46"}</Markdown>],
                [32, 41, <Markdown>{"Some tags were in the earliest versions"}</Markdown>],
                [42, 50, <Markdown>{"Some were added a little later"}</Markdown>],
                [51, 71, <Markdown>{"These were earlier. Tags are ordered by ordinal."}</Markdown>],
                [78, 86, <Markdown>{"Version 0.17 of Factorio didn't even exist when the blueprint was first uploaded"}</Markdown>],
            ]}
        >
            {(value, step) => (
                <Box>
                    <CodePane
                        fontSize={16}
                        language="json"
                        highlightStart={value[0]}
                        highlightEnd={value[1]}
                        indentSize={4}
                    >
                        {json5ByKey}
                    </CodePane>

                    {value[2]}
                </Box>
            )}
        </Stepper>
    </Slide>
    <Slide>
        <Heading>{"GraphQL Fragments"}</Heading>
        <Stepper
            defaultValue={[]}
            values={[
                [1, 39, <Markdown>{"> GraphQL includes reusable units called fragments. Fragments let you construct sets of fields, and then include them in queries where you need to."}</Markdown>],
                [41, 46, <Markdown>{"We'll use this fragment in the next examples"}</Markdown>],
            ]}
        >
            {(value, step) => (
                <Box>
                    <CodePane
                        fontSize={16}
                        language="graphql"
                        highlightStart={value[0]}
                        highlightEnd={value[1]}
                        indentSize={4}
                    >
                        {graphql6WithFragment}
                    </CodePane>

                    {value[2]}
                </Box>
            )}
        </Stepper>
    </Slide>
    <Markdown containsSlides>
        {markdown3graphqlOperations}
    </Markdown>
    <Slide>
        <Heading>{"Structured Criteria Builders"}</Heading>
        <Stepper
            defaultValue={[]}
            values={[
                [42, 44, <Markdown>{"Structured criteria builders help auto-complete"}</Markdown>],
                [42, 42, <Markdown>{"The `v46` prefix is a [GraphQL alias](https://graphql.org/learn/queries/#aliases)"}</Markdown>],
                [46, 53, <Markdown>{`
                            * \`system == {date}\` is shorthand for:
                            * \`systemFrom <= {date} < systemTo\`
                        `}</Markdown>],
                [55, 63, <Markdown>{`
                            * Absence of \`system\` clause implies infinity
                            * Opt out with \`system equalsEdgePoint\`
                        `}</Markdown>],
            ]}
        >
            {(value, step) => (
                <Box>
                    <CodePane
                        fontSize={16}
                        language="graphql"
                        highlightStart={value[0]}
                        highlightEnd={value[1]}
                        indentSize={4}
                    >
                        {graphql7WithStructure}
                    </CodePane>

                    {value[2]}
                </Box>
            )}
        </Stepper>
    </Slide>
    <Slide>
        <Heading>{"Limitations of Structured Criteria Builders"}</Heading>
        <Stepper
            defaultValue={[]}
            values={[
                [42, 48, <Markdown>{"Can express simple derived attributes"}</Markdown>],
                [50, 58, <Markdown>{"Cannot express complex derived attributes (this doesn't work)"}</Markdown>],
            ]}
        >
            {(value, step) => (
                <Box>
                    <CodePane
                        fontSize={16}
                        language="graphql"
                        highlightStart={value[0]}
                        highlightEnd={value[1]}
                        indentSize={4}
                    >
                        {graphql8LimitedStructure}
                    </CodePane>

                    {value[2]}
                </Box>
            )}
        </Stepper>
    </Slide>
    <Slide>
        <Heading>{"Compiled Criteria"}</Heading>
        <Stepper
            defaultValue={[]}
            values={[
                [65, 81, <Markdown>{`
                            * Criteria compiler is powerful, but no auto-complete
                            * Open-sourced compiler as [liftwizard-reladomo-operation-compiler](https://github.com/motlin/liftwizard)
                        `}</Markdown>],
                [55, 63, <Markdown>{`
                            * Absence of \`system\` clause implies infinity
                            * Opt out with \`system equalsEdgePoint\`
                        `}</Markdown>],
            ]}
        >
            {(value, step) => (
                <Box>
                    <CodePane
                        fontSize={16}
                        language="graphql"
                        highlightStart={value[0]}
                        highlightEnd={value[1]}
                        indentSize={4}
                    >
                        {graphql7WithStructure}
                    </CodePane>

                    {value[2]}
                </Box>
            )}
        </Stepper>
    </Slide>
    <Markdown containsSlides>
        {markdown4sql}
    </Markdown>
</Deck>;

const Presentation = () => {
    return deck;
};

ReactDOM.render(<Presentation />, document.getElementById('root'));
