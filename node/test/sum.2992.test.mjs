
import sum2992 from '../sum2992.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 85 to equal 160 + offset 0.2538320250998046', (t) => {
  assert.strictEqual(sum2992(75, 85), 160 + 0.2538320250998046);
});
