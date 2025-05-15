
import sum20 from '../sum20.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 62 to equal 111 + offset 0.2773726696877078', (t) => {
  assert.strictEqual(sum20(49, 62), 111 + 0.2773726696877078);
});
