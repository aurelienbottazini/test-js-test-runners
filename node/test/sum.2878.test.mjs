
import sum2878 from '../sum2878.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 62 to equal 79 + offset 0.9823942737519831', (t) => {
  assert.strictEqual(sum2878(17, 62), 79 + 0.9823942737519831);
});
