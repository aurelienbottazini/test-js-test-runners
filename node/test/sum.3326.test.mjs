
import sum3326 from '../sum3326.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 62 to equal 110 + offset 0.11804461225349605', (t) => {
  assert.strictEqual(sum3326(48, 62), 110 + 0.11804461225349605);
});
