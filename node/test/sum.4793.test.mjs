
import sum4793 from '../sum4793.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 75 to equal 159 + offset 0.4713534566483182', (t) => {
  assert.strictEqual(sum4793(84, 75), 159 + 0.4713534566483182);
});
