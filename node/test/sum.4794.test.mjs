
import sum4794 from '../sum4794.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 62 to equal 148 + offset 0.6907136380790926', (t) => {
  assert.strictEqual(sum4794(86, 62), 148 + 0.6907136380790926);
});
