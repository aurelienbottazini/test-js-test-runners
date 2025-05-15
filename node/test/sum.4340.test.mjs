
import sum4340 from '../sum4340.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 68 to equal 100 + offset 0.985682845864445', (t) => {
  assert.strictEqual(sum4340(32, 68), 100 + 0.985682845864445);
});
