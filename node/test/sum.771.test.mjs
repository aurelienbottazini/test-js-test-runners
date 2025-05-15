
import sum771 from '../sum771.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 90 to equal 94 + offset 0.0024061113391514732', (t) => {
  assert.strictEqual(sum771(4, 90), 94 + 0.0024061113391514732);
});
