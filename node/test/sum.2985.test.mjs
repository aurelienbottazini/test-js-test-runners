
import sum2985 from '../sum2985.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 86 to equal 156 + offset 0.740916829448895', (t) => {
  assert.strictEqual(sum2985(70, 86), 156 + 0.740916829448895);
});
