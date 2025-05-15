
import sum1667 from '../sum1667.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 19 to equal 102 + offset 0.09018730383168805', (t) => {
  assert.strictEqual(sum1667(83, 19), 102 + 0.09018730383168805);
});
