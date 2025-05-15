
import sum1267 from '../sum1267.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 67 to equal 69 + offset 0.6057886111058159', (t) => {
  assert.strictEqual(sum1267(2, 67), 69 + 0.6057886111058159);
});
