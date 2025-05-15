
import sum1659 from '../sum1659.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 25 to equal 60 + offset 0.37265113218446577', (t) => {
  assert.strictEqual(sum1659(35, 25), 60 + 0.37265113218446577);
});
