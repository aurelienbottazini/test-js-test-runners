
import sum518 from '../sum518.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 27 to equal 38 + offset 0.23413507652039167', (t) => {
  assert.strictEqual(sum518(11, 27), 38 + 0.23413507652039167);
});
