
import sum4273 from '../sum4273.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 96 to equal 164 + offset 0.8961387557810201', (t) => {
  assert.strictEqual(sum4273(68, 96), 164 + 0.8961387557810201);
});
