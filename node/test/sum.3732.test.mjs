
import sum3732 from '../sum3732.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 37 to equal 47 + offset 0.5495853383273895', (t) => {
  assert.strictEqual(sum3732(10, 37), 47 + 0.5495853383273895);
});
