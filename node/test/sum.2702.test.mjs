
import sum2702 from '../sum2702.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 48 to equal 61 + offset 0.9537558153612375', (t) => {
  assert.strictEqual(sum2702(13, 48), 61 + 0.9537558153612375);
});
