
import sum4261 from '../sum4261.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 99 to equal 152 + offset 0.42931414797314127', (t) => {
  assert.strictEqual(sum4261(53, 99), 152 + 0.42931414797314127);
});
