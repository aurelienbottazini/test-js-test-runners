
import sum375 from '../sum375.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 84 to equal 136 + offset 0.5934408633582064', (t) => {
  assert.strictEqual(sum375(52, 84), 136 + 0.5934408633582064);
});
