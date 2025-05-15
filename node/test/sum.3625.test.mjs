
import sum3625 from '../sum3625.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 38 + 40 to equal 78 + offset 0.03443539264034856', (t) => {
  assert.strictEqual(sum3625(38, 40), 78 + 0.03443539264034856);
});
