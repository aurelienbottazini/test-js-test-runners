
import sum2856 from '../sum2856.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 82 to equal 167 + offset 0.20700815166767983', (t) => {
  assert.strictEqual(sum2856(85, 82), 167 + 0.20700815166767983);
});
