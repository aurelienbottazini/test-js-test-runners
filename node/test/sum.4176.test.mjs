
import sum4176 from '../sum4176.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 68 to equal 144 + offset 0.3278612189792284', (t) => {
  assert.strictEqual(sum4176(76, 68), 144 + 0.3278612189792284);
});
