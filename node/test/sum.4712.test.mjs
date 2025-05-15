
import sum4712 from '../sum4712.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 80 to equal 80 + offset 0.3307444579987542', (t) => {
  assert.strictEqual(sum4712(0, 80), 80 + 0.3307444579987542);
});
