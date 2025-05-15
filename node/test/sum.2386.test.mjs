
import sum2386 from '../sum2386.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 23 to equal 31 + offset 0.5300050589678204', (t) => {
  assert.strictEqual(sum2386(8, 23), 31 + 0.5300050589678204);
});
