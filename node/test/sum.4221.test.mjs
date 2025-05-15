
import sum4221 from '../sum4221.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 17 to equal 85 + offset 0.07741076509446276', (t) => {
  assert.strictEqual(sum4221(68, 17), 85 + 0.07741076509446276);
});
