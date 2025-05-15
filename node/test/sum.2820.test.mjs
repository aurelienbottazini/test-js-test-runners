
import sum2820 from '../sum2820.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 15 to equal 101 + offset 0.020686261611972623', (t) => {
  assert.strictEqual(sum2820(86, 15), 101 + 0.020686261611972623);
});
