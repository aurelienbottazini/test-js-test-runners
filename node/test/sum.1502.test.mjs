
import sum1502 from '../sum1502.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 5 to equal 30 + offset 0.7031202300734041', (t) => {
  assert.strictEqual(sum1502(25, 5), 30 + 0.7031202300734041);
});
