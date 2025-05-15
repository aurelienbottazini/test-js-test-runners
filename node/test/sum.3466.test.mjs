
import sum3466 from '../sum3466.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 43 to equal 139 + offset 0.3704980351120172', (t) => {
  assert.strictEqual(sum3466(96, 43), 139 + 0.3704980351120172);
});
