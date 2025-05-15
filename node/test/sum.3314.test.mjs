
import sum3314 from '../sum3314.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 85 to equal 90 + offset 0.5677043533630404', (t) => {
  assert.strictEqual(sum3314(5, 85), 90 + 0.5677043533630404);
});
