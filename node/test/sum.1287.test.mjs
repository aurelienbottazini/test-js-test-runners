
import sum1287 from '../sum1287.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 49 to equal 109 + offset 0.4676126927052735', (t) => {
  assert.strictEqual(sum1287(60, 49), 109 + 0.4676126927052735);
});
