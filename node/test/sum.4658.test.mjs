
import sum4658 from '../sum4658.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 52 to equal 101 + offset 0.26006611835944093', (t) => {
  assert.strictEqual(sum4658(49, 52), 101 + 0.26006611835944093);
});
