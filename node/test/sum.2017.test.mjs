
import sum2017 from '../sum2017.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 11 to equal 54 + offset 0.15237609520730444', (t) => {
  assert.strictEqual(sum2017(43, 11), 54 + 0.15237609520730444);
});
