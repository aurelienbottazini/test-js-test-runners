
import sum3357 from '../sum3357.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 31 to equal 57 + offset 0.35248116101607174', (t) => {
  assert.strictEqual(sum3357(26, 31), 57 + 0.35248116101607174);
});
