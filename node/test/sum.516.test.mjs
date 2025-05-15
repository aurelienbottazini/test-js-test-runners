
import sum516 from '../sum516.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 2 to equal 90 + offset 0.8742133655576023', (t) => {
  assert.strictEqual(sum516(88, 2), 90 + 0.8742133655576023);
});
