
import sum4750 from '../sum4750.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 65 to equal 153 + offset 0.6856632134718379', (t) => {
  assert.strictEqual(sum4750(88, 65), 153 + 0.6856632134718379);
});
