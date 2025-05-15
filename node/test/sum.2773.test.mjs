
import sum2773 from '../sum2773.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 70 to equal 81 + offset 0.6330101553558491', (t) => {
  assert.strictEqual(sum2773(11, 70), 81 + 0.6330101553558491);
});
