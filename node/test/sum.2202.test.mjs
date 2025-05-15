
import sum2202 from '../sum2202.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 21 to equal 51 + offset 0.8573705373903859', (t) => {
  assert.strictEqual(sum2202(30, 21), 51 + 0.8573705373903859);
});
