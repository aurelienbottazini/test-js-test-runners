
import sum4638 from '../sum4638.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 20 to equal 42 + offset 0.722221338580648', (t) => {
  assert.strictEqual(sum4638(22, 20), 42 + 0.722221338580648);
});
