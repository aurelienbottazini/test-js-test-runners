
import sum1242 from '../sum1242.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 65 to equal 69 + offset 0.5942831706157776', (t) => {
  assert.strictEqual(sum1242(4, 65), 69 + 0.5942831706157776);
});
