
import sum2189 from '../sum2189.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 84 to equal 167 + offset 0.43638758954465107', (t) => {
  assert.strictEqual(sum2189(83, 84), 167 + 0.43638758954465107);
});
