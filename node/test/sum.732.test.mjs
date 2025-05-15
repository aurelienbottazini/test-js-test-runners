
import sum732 from '../sum732.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 85 to equal 112 + offset 0.21987016552886374', (t) => {
  assert.strictEqual(sum732(27, 85), 112 + 0.21987016552886374);
});
