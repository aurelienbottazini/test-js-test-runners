
import sum3847 from '../sum3847.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 89 to equal 164 + offset 0.5371552324519951', (t) => {
  assert.strictEqual(sum3847(75, 89), 164 + 0.5371552324519951);
});
