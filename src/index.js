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
    // fonts: {
    //     header: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    //     text: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    //     monospace: '"Menlo", "Consolas", monospace'
    // },
    size: {
        maxCodePaneHeight: 400
    },
    colors: {
        // body text
        primary: '#ebe5da',

        // title text
        secondary: '#fc6986',

        // background
        tertiary: '#1e2852',

        quaternary: '#ffc951',

        quinary: '#8bddfd'
    },
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
                            href="https://www.factorio.school/api/blueprint/-KnQ865j-qQ21WoUPbd3?asOf=2020-12-15T00:00:00Z">
                            <CodeSpan>{"/.../{key}?asOf=2020-12-15T00:00:00Z"}</CodeSpan>
                        </Link>
                    </Text>
                </Appear>
                <Appear elementNum={2}>
                    <Text>
                        <Link href="https://www.factorio.school/api/blueprint/-KnQ865j-qQ21WoUPbd3?version=46">
                            <CodeSpan>{"/.../{key}?version=46"}</CodeSpan>
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
                [1, 69, <Markdown>Here's the data!</Markdown>],
                [7, 8, <Markdown>`systemFrom` is the last updated date</Markdown>],
                [7, 8, <Markdown>`systemTo: null` means the current data</Markdown>],
                [7, 8, <Markdown>`9999-12-01`, `null`, `infinity` all mean the same thing</Markdown>],
                [1, 69, <Markdown>{"* `GET blueprint/{key}` is the same as:\n* `GET blueprint/{key}?asOf=9999-12-01T00:00:00Z`"}</Markdown>],
                [5, 16, <Markdown>`version` is dedicated to temporal metadata</Markdown>],
                [6, 6, <Markdown>`version.number` increments with changes to the composite</Markdown>],
                [9, 9, <Markdown>`version.createdOn` matches version 1's `systemFrom` and never changes</Markdown>],
                [5, 16, <Markdown>`version` comes from `BlueprintVersion` temporal table and has its own `systemFrom` and `systemTo`. Do you know why?</Markdown>],
                [18, 19, <Markdown>`voteSummary.numberOfUpvotes` is derived from `count()`</Markdown>],
                [10, 15, <Markdown>`userId` is foreign key to user table</Markdown>],
                [10, 15, <Markdown>User data is queried separately, not embedded</Markdown>],
                [10, 15, <Markdown>User data is **not** part of the composite</Markdown>],
                [30, 37, <Markdown>Imgur image data **is** part of the composite</Markdown>],
                [38, 111, <Markdown>{"`Blueprint <--> Tag` is many-to-many"}</Markdown>],
                [38, 111, <Markdown>`BlueprintTag` mapping table is also part of the Blueprint composite</Markdown>],
                [7, 8, <Markdown>this: `2020-12-15T04:18:34Z` next: `2020-12-15T00:00:00Z`</Markdown>],
            ]}
        >
            {(value, step) => (
                <Box>
                    <CodePane
                        fontSize={16}
                        language="json"
                        highlightStart={value[0]}
                        highlightEnd={value[1]}
                        indentSize={1}
                    >
                        {json1ById}
                    </CodePane>
                    {value[2]}
                </Box>
            )}
        </Stepper>
    </Slide>
    <Slide>
        <Heading>{"{key}?asOf=2020-12-15T00:00:00Z"}</Heading>
        <Stepper
            defaultValue={[]}
            values={[
                [3, 4, <Markdown>{"`systemFrom <= 2020-12-15 < systemTo`"}</Markdown>],
                [7, 8, <Markdown>{"`systemFrom <= 2020-12-15 < systemTo`"}</Markdown>],
                [20, 21, <Markdown>{"`systemFrom <= 2020-12-15 < systemTo`"}</Markdown>],
                [35, 36, <Markdown>{"`systemFrom <= 2020-12-15 < systemTo`"}</Markdown>],
                [5, 6, <Markdown>`version.number == 47`</Markdown>],
                [17, 17, <Markdown>Old title here - new one said `0.17-1.0`</Markdown>],
                [30, 37, <Markdown>New `imgurImage` as well</Markdown>],
                [5, 16, <Markdown>Single version number bump, with multiple edits</Markdown>],
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
        <Heading>{"{key}?version=46"}</Heading>
        <Stepper
            defaultValue={[]}
            values={[
                [5, 6, <Markdown>`version.number == 46`</Markdown>],
                [7, 8, <Markdown>{"`systemFrom == 2020-01-11T04:20:28Z`"}</Markdown>],
                [7, 8, <Markdown>{"The rest identical to `systemFrom <= 2020-01-11 < systemTo`"}</Markdown>],
                [17, 17, <Markdown>{"Old title here - new one says `0.17-0.18`"}</Markdown>],
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
                [1, 1, <Markdown>{"GraphQL queries are surrounded with `query {...}` or just `{...}`"}</Markdown>],
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
                        indentSize={1}
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
