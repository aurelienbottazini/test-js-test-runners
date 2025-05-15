
import sum2447 from '../sum2447.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 37 to equal 135 + offset 0.5331286399641879', (t) => {
  assert.strictEqual(sum2447(98, 37), 135 + 0.5331286399641879);
});
