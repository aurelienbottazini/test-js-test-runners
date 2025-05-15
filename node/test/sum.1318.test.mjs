
import sum1318 from '../sum1318.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 16 to equal 110 + offset 0.5075416987671488', (t) => {
  assert.strictEqual(sum1318(94, 16), 110 + 0.5075416987671488);
});
