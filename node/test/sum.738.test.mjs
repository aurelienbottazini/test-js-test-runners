
import sum738 from '../sum738.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 19 to equal 77 + offset 0.5072499684916322', (t) => {
  assert.strictEqual(sum738(58, 19), 77 + 0.5072499684916322);
});
