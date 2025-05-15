
import sum3695 from '../sum3695.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 27 to equal 87 + offset 0.365575492570522', (t) => {
  assert.strictEqual(sum3695(60, 27), 87 + 0.365575492570522);
});
