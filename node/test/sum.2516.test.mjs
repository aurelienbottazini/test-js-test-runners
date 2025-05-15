
import sum2516 from '../sum2516.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 59 to equal 116 + offset 0.41226820751064885', (t) => {
  assert.strictEqual(sum2516(57, 59), 116 + 0.41226820751064885);
});
