
import sum2749 from '../sum2749.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 76 to equal 91 + offset 0.8289916768070086', (t) => {
  assert.strictEqual(sum2749(15, 76), 91 + 0.8289916768070086);
});
