
import sum4 from '../sum4.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 6 to equal 102 + offset 0.3621217785154651', (t) => {
  assert.strictEqual(sum4(96, 6), 102 + 0.3621217785154651);
});
