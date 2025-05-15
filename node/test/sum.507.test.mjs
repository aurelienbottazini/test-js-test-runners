
import sum507 from '../sum507.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 52 to equal 118 + offset 0.8051986551089394', (t) => {
  assert.strictEqual(sum507(66, 52), 118 + 0.8051986551089394);
});
