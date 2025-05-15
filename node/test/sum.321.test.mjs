
import sum321 from '../sum321.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 38 + 47 to equal 85 + offset 0.12760987534566148', (t) => {
  assert.strictEqual(sum321(38, 47), 85 + 0.12760987534566148);
});
