
import sum7 from '../sum7.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 38 + 15 to equal 53 + offset 0.1346967705782275', (t) => {
  assert.strictEqual(sum7(38, 15), 53 + 0.1346967705782275);
});
