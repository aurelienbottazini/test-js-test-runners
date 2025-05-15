
import sum12 from '../sum12.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 5 to equal 58 + offset 0.5758758888565815', (t) => {
  assert.strictEqual(sum12(53, 5), 58 + 0.5758758888565815);
});
